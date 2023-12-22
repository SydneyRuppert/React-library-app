import Button from "./Button"
import Input from "./Input"

import { useForm } from 'react-hook-form'
import { server_calls } from "../api/server"
import { useDispatch, useStore } from 'react-redux'
import { chooseFirst, chooseLast, chooseGenre, choosePages,chooseTitle } from '../redux/slices/RootSlice'

interface BookFormProps {
  id?: string[]
}

const BookForm = ( props:BookFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id)
    console.log(data)
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data)
      console.log(`Updated: ${ data.first } ${ props.id }`)
      setTimeout(()=>{window.location.reload()}, 1000)
    } else {
      dispatch(chooseFirst(data.authors_first_name));
      dispatch(chooseLast(data.authors_last_name));
      dispatch(chooseGenre(data.book_title));
      dispatch(chooseTitle(data.genre));
      dispatch(choosePages(data.pages));

      server_calls.create(store.getState())
      setTimeout(()=>{window.location.reload()}, 1000)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="first">Authors First Name</label>
          <Input {...register('authors_first_name')} name='authors_first_name' placeholder="Authors First Name" />
        </div>
        <div>
          <label htmlFor="authors_last_name">Authors Last Name</label>
          <Input {...register('authors_last_name')} name='authors_last_name' placeholder="Authors Last Name" />
        </div>
        <div>
          <label htmlFor="book_title">Book Title</label>
          <Input {...register('book_title')} name='book_title' placeholder="The Book Title" />
        </div>
        <div>
          <label htmlFor="genre">Genre</label>
          <Input {...register('genre')} name='genre' placeholder="Genre" />
        </div>
        <div>
          <label htmlFor="pages">Total Page Number</label>
          <Input {...register('pages')} name='pages' placeholder="Total Page Count" />
        </div>
        <div className="flex p-1">
          <Button className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default BookForm

    