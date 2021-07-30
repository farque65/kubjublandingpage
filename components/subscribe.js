import { useState } from 'react'
import { supabase } from '../client'
import { get } from 'lodash';

export default function Subscribe() {
  const [email, setEmail] = useState("")

  function validEmailFormat(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  async function submitHandler(e) {
    e.preventDefault();
    let countDuplicates = 0;

    if (!validEmailFormat(email)) {
      return;
    }
    
    const { selectData, selectError } = await supabase
      .from('emailList')
      .select('Email', {count: 'exact'})
      .eq('Email', email)
      .then((result)=>{
        countDuplicates = get(result, 'count') || 0;
        return result;
      })

      if(selectError) {
        throw new Error(selectError);
      }

      if (countDuplicates > 0) {
        window.location.reload();
      }

    const { insertData, insertError } = await supabase
      .from('emailList')
      .insert([
        { Email: email }
    ])

    if(insertError) {
      throw new Error(insertError);
    }
  }

  return (
    <div className="max-w-7xl mx-auto flex items-center justify-center bg-yellow-050 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-28 w-auto"
            src="https://drive.google.com/uc?id=1ibO7bHjun8eFYWehjejnxJTS4WMwnl1y"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">SUBSCRIBE</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Receive updates and learn more about the new creator economy
          </p>
        </div>
        <form className="mt-8 space-y-6">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                onChange={(e)=> {setEmail(e.target.value)}}
              />
            </div>
          </div>

          <div>
            <button
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={submitHandler}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
