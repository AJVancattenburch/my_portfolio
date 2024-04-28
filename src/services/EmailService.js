import emailjs from 'emailjs-com';
import { logger } from '../utils/Logger';
import { emailConfig } from './../env';
import Pop from '../utils/Pop';

function _getEmailPayload(newEmail) {
  return {
    from_name: newEmail.name,
    to_name: emailConfig.myName,
    from_email: newEmail.email,
    to_email: emailConfig.myEmail,
    message: newEmail.message,
  };
}

class EmailService {
  async sendEmail(newEmail) {
    try {
      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        _getEmailPayload(newEmail),
        emailConfig.userId
      );
      Pop.success(`Thank you for your message! I will get back to you as soon as possible. - ${emailConfig.myName}`);
      this.getDetailedEmailLog(newEmail);
    } catch (error) {
      Pop.error("Sorry, something went wrong. Please try again later.");
      logger.error(error);
    }
  }

  getDetailedEmailLog(newEmail) {
    const timeStamp = new Date().toLocaleString();
    const recipient = emailConfig.myName;
    const email = {
      name: newEmail.name,
      email: newEmail.email,
      message: newEmail.message,
    };
    logger.log(`Your email sent to ${recipient} with the following details:`, email, `Time Stamp: ${timeStamp}`);
  }
}

export const emailService = new EmailService();