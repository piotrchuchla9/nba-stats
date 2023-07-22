export default function RadioPlayersOptions() {
  return (
    <div className="flex mt-4 w-1/2">
      <div className="form-control">
        <label className="label cursor-pointer flex flex-col">
          <div className="label-text mr-2">Red pill</div>
          <input
            type="radio"
            name="radio-10"
            className="radio checked:bg-blue-500 mt-4"
            checked
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer flex flex-col">
          <div className="label-text mr-2">Red pill</div>
          <input
            type="radio"
            name="radio-10"
            className="radio checked:bg-blue-500 mt-4"
            checked
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer flex flex-col">
          <div className="label-text mr-2">Red pill</div>
          <input
            type="radio"
            name="radio-10"
            className="radio checked:bg-blue-500 mt-4"
            checked
          />
        </label>
      </div>
    </div>
  );
}
