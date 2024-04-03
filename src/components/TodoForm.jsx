export const TodoForm = ({handleSubmit,inputValue,handleChange}) =>
{
    return<>
    <form onSubmit={handleSubmit}>
          <div id="new-task">
            <input type="text" id="task" required value={inputValue?.value || ""} onChange={handleChange} />
            <button id="create" type='submit'>{inputValue?.id ? "Update" : "Add" || ""}</button>
          </div>
        </form>
    </>
}