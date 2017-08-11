import SearchModel from '../../models/main/SearchModel';

export default Backbone.View.extend({

    el: $("#search"),

    events:{
        "click #search": "search"
    },

    initialize: function(){
        console.log("SearchView view init");
        this.model = new SearchModel();
        this.render();
        this.listenTo(this.model, 'change', this.render);
    },

    search: function(e){
        e.preventDefault();


        let content = this.$('#content').val();

        console.log("search content : " + content);

        this.model.fetch({ data: { q: content} });

        //let model = new SearchModel({id:"hihihi"});

        //this.listenToOnce(model, 'change', this.fetch);
        //this.model.fetch();

        //this.model.fetch({id : "hihihi"});
        //this.model.save({id : "hihihi"});
        //this.model.fetch({id : "hihihi"});
        //this.model.save({id : "hihihi"});
        //this.model.
        //this.model({id:"hihi"}).fetch();
    },

    render:function () {
        console.log("render gogo");
        //this.$el.html(this.model.toJSON());

        return this;
    }
});