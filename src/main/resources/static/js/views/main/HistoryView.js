import HistoryTemplate from '../../../../templates/main/historyTemplate.hbs'
import HistoryCollection from '../../collections/main/HistoryCollection'
import HistoryAddView from './HistoryAddView'
export default Backbone.View.extend({

    el: $("#history"),

    initialize: function(){
        console.log("HistoryView init");
        this.template = HistoryTemplate;
        this.collection = new HistoryCollection();
        this.listenTo(this.collection, 'add', this.renderHistory);
    },

    render:function () {
        console.log("HistoryView render");
        //this.$el.append(this.template());
        return this;
    },

    addHistory:function (model) {
        console.log("HistoryView addHistory");
        this.collection.add(model);
    },

    renderHistory:function (model) {
        console.log("HistoryView renderHistory");
        let historyAddView = new HistoryAddView({
            model: model
        });
        this.$el.append( historyAddView.render().el );
    }
});

