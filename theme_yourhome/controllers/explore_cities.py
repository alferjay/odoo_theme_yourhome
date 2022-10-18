from odoo import http


class YourHomeCities(http.Controller):

    @http.route('/cities/', auth="public", type="json", methods=['POST'])
    def all_cities(self):
        cities = http.request.env['yh.cities'].search_read([], ['country_id', 'state_id', 'image'])
        return cities
