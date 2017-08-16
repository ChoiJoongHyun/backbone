import HistoryTemplate from '../../../../templates/main/historyTemplate.hbs'
import HistoryCollection from '../../collections/main/HistoryCollection'
import HistoryView from './HistoryView'
export default Backbone.View.extend({


    events: {
        'click #historyDelBtn': 'deleteHistory'
    },

    initialize: function(){
        console.log("HistoryAddView view init");
        this.template = HistoryTemplate;
    },

    render:function () {
        console.log("HistoryAddView render" );
        let jh = this.model.toJSON();

        this.$el.html(this.template(this.model.toJSON()));

        return this;
    },
    
    deleteHistory:function () {
        this.model.destroy();
        this.remove();
    }
});

