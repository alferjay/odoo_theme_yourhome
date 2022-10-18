/** @odoo-module **/

import options from 'web_editor.snippets.options';

options.registry.ExploreCitiesOptions = options.Class.extend({
    start() {
        let citiesRow = this.$target.find('#yh-cities-row')

        if (citiesRow){
            this._rpc({
                route: '/cities/',
                params:{}
            }).then(data=>{
                let html = ``
                data.forEach(city=>{
                    html += `<div class="col-lg-3 mb-5">
                        <div class="d-flex align-items-center">
                            <div class="img-container mr-3 rounded">
                                <img class="country-image rounded" src="data:image/png;base64,${city.image}"/>
                            </div>
                            <div>
                                <h5 class="mb-0">${city.state_id ? city.state_id[1] : ''}</h5>
                                <div>${city.country_id ? city.country_id[1] : ''}</div>
                            </div>
                        </div>
                    </div>`
                })
                citiesRow.html(html)
            })
        }
    },
})

export default {
    ExploreCitiesOptions: options.registry.ExploreCitiesOptions,
};