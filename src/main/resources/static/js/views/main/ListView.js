import SearchListTemplate from '../../../../templates/main/searchListTemplate.hbs'
export default Backbone.View.extend({

    el: $("#list"),

    initialize: function(){
        console.log("List view init");
        this.template = SearchListTemplate;
    },

    render:function (options) {
        console.log("listView render gogo : " + options.length);
        this.$el.html(this.template(options));
        return this;
    }
});

