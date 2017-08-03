

export default Backbone.View.extend({
    tagName:"div",
    template:$("#userTemplate").html(),

    render:function () {
        //tmpl은 JSON객체를 받아서 html을 반환하는 함수이다.
        var tmpl = _.template(this.template);
        //this.el은 tagName에 정의된 것이다. jQuery html() 함수를 사용하기 위해서는 $el을 쓴다.
        this.$el.html(tmpl(this.model.toJSON()));
        return this;
    },

    events: {
        "click .delete": "deleteUser"
    },

    deleteUser:function () {
        this.model.destroy();
        this.remove();
    }
});