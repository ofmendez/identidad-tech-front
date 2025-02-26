const TableRow = ({ device }) => {
  return (
    <tr className='bg-white border-b hover:bg-gray-50 '>
      <td className='w-4 p-4'>
        <div className='flex items-center'>
          <input id='checkbox-table-search-1' type='checkbox' className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600' />
          <label htmlFor='checkbox-table-search-1' className='sr-only'>checkbox</label>
        </div>
      </td>
      <th scope='row' className='px-6 py-4 font-medium  whitespace-nowrap'>
        {device.Name}
      </th>
      <td className='px-6 py-4'>
        {device.Battery}
      </td>
      <td className='px-6 py-4'>
        {device.Storage}
      </td>
      <td className='px-6 py-4'>
        {device.MainCamera}
      </td>
      <td className='px-6 py-4'>
        {device.FrontCamera}
      </td>
      <td className='px-6 py-4'>
        {device.Price}
      </td>
    </tr>
  );
};
export default TableRow;
