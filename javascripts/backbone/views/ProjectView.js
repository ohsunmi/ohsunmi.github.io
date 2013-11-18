var app = app || {};

app.ProjectView = Backbone.View.extend({

	initialize: function() {
		this.$list = $('#work_container');
	},

	render: function() {
		var template = Handlebars.compile($('#project-view-template').html());
		this.collection.each(function(project) {
			var html = template(project.toJSON());
			this.$list.append(html);
		}, this);
		return this;
	}
});