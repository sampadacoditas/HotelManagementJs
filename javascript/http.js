class HTTP{
    baseurl="https://jsonplaceholder.typicode.com/";

    async send(url,options={})
    {
        try{
            const response=await fetch(`${this.baseurl}${url}`,options);
             const data = await response.json();
            // console.log(data);
            console.log("try block")
            if(!response.ok)
            {
                console.log(response);
            }
            else{
                // console.log("dfghj")
                console.log(response);
            }
        }
        catch(error){
            console.log("I am in catch block")
            console.log(error);
        }
    }
     get(url)
    {
       return this.send(url)
    }
    post(url,data)
    {
        return this.send(url,{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(data)
        })
    }
    delete(url)
    {
        return this.send(url,{
            method:'DELETE'
        })
    }
}
export const http=new HTTP();