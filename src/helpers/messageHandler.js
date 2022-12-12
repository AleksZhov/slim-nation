import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';

const notifySettings = {
    position: 'left-bottom',
    timeout: 10000,
    textColor: '#000',
};

const reportSettings = {
    width: '350px',
    backOverlay: true,
    svgSize: '80px',
};

class Message {
    success(text) {
        return Notify.success(text, notifySettings);
    }
    warning(textHead, textMessage) {
        return Report.warning(textHead, textMessage, 'OK', {
            ...reportSettings,
            backOverlayColor: '#fff00055',
        });
    }
    error(textHead, textMessage) {
        return Report.failure(textHead, textMessage, 'OK', {
            ...reportSettings,
            backOverlayColor: '#ff000055',
        });
    }
}

export default new Message();
