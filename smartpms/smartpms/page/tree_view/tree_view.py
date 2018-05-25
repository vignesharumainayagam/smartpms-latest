

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document
from frappe import _
import os, sys, importlib, inspect, json
import unicodedata
import pdb



@frappe.whitelist()
def get_child_data():
        data = frappe.get_list('User',
                fields=["name"],
                filters = [
                ]
                )      
        return data
