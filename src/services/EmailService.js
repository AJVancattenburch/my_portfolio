import emailjs from 'emailjs-com';
import { ref } from "vue";
import { logger } from "../utils/Logger.js";
import { serviceId, templateId, userId, myName, myEmail } from './../env';

function _getEmailInfo(form) {
  return {
    from_name: form.name,
    to_name: myName,
    from_email: form.email,
    to_email: myEmail,
    message: form.message,
  }
}

class EmailService {
  async sendEmail(form) {
    try {
      await emailjs.send(
        serviceId,
        templateId,
        _getEmailInfo(form),
        userId
      );
      alert("Thank you for your message! I will get back to you as soon as possible.");
      this.logSentEmail(form);
    } catch (error) {
      alert("Sorry, something went wrong. Please try again later.");
      logger.error(error);
    }
  }

  logSentEmail(form) {
    const email = {
      name: form.name,
      email: form.email,
      message: form.message,
    };
    logger.log(email);
  }
}

export const emailService = new EmailService();