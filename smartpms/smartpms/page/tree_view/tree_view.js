// frappe.provide("frappe.tree_view");

frappe.pages['tree-view'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Tree View',
		single_column: true
	});
	var data1;
	var data = frappe.call({
		method: "smartpms.smartpms.page.tree_view.tree_view.get_child_data",
		callback: function (r) {
			data1 =+ r.message;
		}
	})

	frappe.modules_setup_page = page;
	// $(frappe.render_template('tree_view')).appendTo(page.body);
	page.main.html(frappe.render_template("tree_view", data));
	
	var patient = frappe.ui.form.make_control({
		parent: page.main.find(".patient"),
		df: {
			fieldtype: "Link",
			options: "User",
			fieldname: "user",
			// change: function(){
			// 	page.main.find(".frappe-list").html("");
			// 	draw_page(patient.get_value(), me);
			// }
		},
		only_input: true,
	});
	patient.refresh();




console.log(data1)


}