var app = app || {};

app.Router = Backbone.Router.extend({

	routes: {
		'': 'index'
	},

	initialize: function() {
		this.projects = new app.Projects([
			new app.Project({image: 'id=image_a src=images/photo_site.jpg'}),
			new app.Project({image: 'id=image_b src=images/photo_site2.jpg'}),
			new app.Project({image: 'id=image_c src=images/tomatotxt.jpg'}),
			new app.Project({image: 'id=image_d src=images/tomatotxt_2.jpg'}),
			new app.Project({image: 'id=image_e src=images/retwitr2.jpg'}),
			new app.Project({image: 'id=image_f src=images/retwitr_2.jpg'})
		]);
	},

	index: function() {
		app.project_view = new app.ProjectView({collection: this.projects});
		app.project_view.render();
	}
});