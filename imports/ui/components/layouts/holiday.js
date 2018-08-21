import './holiday.html';


Template.holiday.helpers({
	holidayList(){
		console.log(moment('12/25/2013').holiday());
	}
})
