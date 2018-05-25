from __future__ import unicode_literals
from frappe import _

def get_data():
	return [
		{
			"label": _("Vessel"),
			"items": [
				{
					"type": "doctype",
					"name": "Vessel"
				},			
			]
		},
		{
			"label": _("Masters"),
			"items": [
				{
					"type": "doctype",
					"name": "Functional Block"
				},			
				{
					"type": "doctype",
					"name": "SubFunctional Block"
				},			
				{
					"type": "doctype",
					"name": "Equipment"
				},			
				{
					"type": "doctype",
					"name": "Sub Equipment"
				}
			]
		},
		{
			"label": _("Maintenance & Defects"),
			"items": [
				{
					"type": "doctype",
					"name": "Maintenance"
				},			
				{
					"type": "doctype",
					"name": "Defect"
				},			
				{
					"type": "page",
					"name": "tree-view",
				},
			]
		},		
	] 

	



