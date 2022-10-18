from odoo import models, fields


class YourHomeCities(models.Model):
    _name = 'yh.cities'
    _description = 'Your Home Cities'

    country_id = fields.Many2one('res.country', string='Country')
    state_id = fields.Many2one('res.country.state', domain="[('country_id', '=?', country_id)]", string='City/State')
    description = fields.Text()
    image = fields.Binary()

