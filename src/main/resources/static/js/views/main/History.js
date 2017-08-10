export default Backbone.View.extend({
    //tagName: '',

    el: $("#main"),

    //template:$("#searchHistoryTemplate").html(),
    todoTpl: _.template("hiyo"),

    events:{
        "click #search": "search"
    },

    initialize: function(){
        console.log("Main view init");
        //this.render();
    },

    search: function(e){
        e.preventDefault();
        console.log("search gogo");
    },

    render:function () {
        console.log("render gogo");
        this.$el.html(this.todoTpl());
        //tmpl은 JSON객체를 받아서 html을 반환하는 함수이다.
        //var tmpl = _.template(this.template);
        //this.el은 tagName에 정의된 것이다. jQuery html() 함수를 사용하기 위해서는 $el을 쓴다.
        //this.$el.html(tmpl());

        return this;
    }
});