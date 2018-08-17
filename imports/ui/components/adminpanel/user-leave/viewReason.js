import './viewReason.html';

Template.viewReason.helpers({
	formateTime(date){
        return moment(date).format('MM-DD-YYYY');
    }
});
