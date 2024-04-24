import Swal from 'sweetalert2'

const AddCoffee = () => {

    const handleAddCoffee = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const quantity = e.target.quantity.value;
        const details = e.target.details.value;
        const taste = e.target.taste.value;
        const category = e.target.category.value;
        const supplier = e.target.supplier.value;
        const photoUrl = e.target.photoUrl.value;
        const newCoffee = {name, quantity, details, taste, category, supplier, photoUrl};
        console.log(newCoffee);
            // send data to the server
        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newCoffee)

        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee Added',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }

  return (
    <div className="bg-blue-50 p-10 rounded-xl">
      <h1 className="text-3xl font-extrabold mb-10">Add A Coffee</h1>
      <form onSubmit={handleAddCoffee} action="">
        <div className="flex gap-6">
          <div className="w-2/4 space-y-6 ">
            <label className="input input-bordered flex items-center gap-2">
              Name
              <input
                type="text"
                name="name"
                className="grow"
                placeholder="Coffee Name"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Available Quantity
              <input
                type="text"
                name="quantity"
                className="grow"
                placeholder="Available Quantity"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Details
              <input
                type="text"
                name="details"
                className="grow"
                placeholder="Details"
              />
            </label>
          </div>
          <div className="w-2/4 space-y-6 ">
            <label className="input input-bordered flex items-center gap-2">
              Taste
              <input
                type="text"
                name="taste"
                className="grow"
                placeholder="Taste"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Category
              <input
                type="text"
                name="category"
                className="grow"
                placeholder="Category"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Supplier
              <input
                type="text"
                name="supplier"
                className="grow"
                placeholder="Supplier"
              />
            </label>
          </div>
          
        </div>
        <div className=" mt-6">
        <label className="input input-bordered flex items-center gap-2">
              Photo Url
              <input
                type="text"
                name="photoUrl"
                className="grow"
                placeholder="Photo Url"
              />
            </label>
        </div>
        <div >
            <input className="btn btn-block btn-primary mt-6" type="submit" value="Add Coffee" />
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
