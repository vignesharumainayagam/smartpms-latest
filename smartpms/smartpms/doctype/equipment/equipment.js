// Copyright (c) 2017, Valiant Systems and contributors
// For license information, please see license.txt

frappe.ui.form.on('Equipment', {
	refresh: function(frm) {

	}
});

frappe.ui.form.on("Equipment", "refresh", function(frm) { 
    cur_frm.set_query("sub_functional_block", function() {
        return {
            "filters": {
                "functional_block_name": (frm.doc.functional_block)
            }
        };
    });   
});
