import './sidebar.html';
Template.sidebar.helpers({
	userDetail(){
		if(FlowRouter.getParam("id")){
			return FlowRouter.getParam("id");
		}
	}
});
