export function CreateTodo(){
    return <div>
        <input type="text" className="border border-black p-2 m-2"  placeholder="title"/> <br />
        <input type="text" className="border border-black p-2 m-2" placeholder="Description" /> <br />

        <button className="bg-red-500 text-white rounded-lg p-2 m-2">Add a todo</button>
    </div>
}