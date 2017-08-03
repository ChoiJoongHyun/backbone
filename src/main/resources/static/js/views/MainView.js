

export default Backbone.View.extend({



    initialize: function () {
        this.template = Template;
        return this;
    },
    render: function () {
        this.$el.html(this.template());
        return this;
    }




});
