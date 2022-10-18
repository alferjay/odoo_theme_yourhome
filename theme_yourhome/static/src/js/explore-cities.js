/** @odoo-module **/

import publicWidget from 'web.public.widget';

publicWidget.registry.YhCities = publicWidget.Widget.extend({
    selector: '.explore-cities',
    start() {
        let citiesRow = this.el.querySelector('#yh-cities-row')

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
                citiesRow.innerHTML = html
            })
        }
    },
});

export default publicWidget.registry.YhCities;
