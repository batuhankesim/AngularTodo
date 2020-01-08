export class Model {
    user;
    items;

    constructor() {
        this.user = "batuhan";
        this.items = [
                        new TodoItem("Spor",true),
                        new TodoItem("Kahvaltı",false),
                        new TodoItem("Sinema",false),
                        new TodoItem("Fatura",false),
                      ];
    }

}
 
export class TodoItem {
    description;
    action;

    constructor(description, action) {
        this.description = description;
        this.action = action;
    }
}