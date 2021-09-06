import { useSelector } from "react-redux";

export default function BookHistoryAdminComponent() {
    const reservations = useSelector(state => state.reservation.reservations);
    return (
      <div className="flex flex-col h-full">
        <div className="py-2 align-middle">
            <div className="shadow overflow-x-auto border-b border-gray-200 sm:rounded-lg w-full">
                <table className="divide-y divide-gray-200 w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th
                                scope="col"
                                className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Guest
                            </th>
                            <th
                                scope="col"
                                className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Property
                            </th>
                            <th
                                scope="col"
                                className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Checked in, out
                            </th>
                            <th
                                scope="col"
                                className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Status
                            </th>
                            <th
                                scope="col"
                                className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Host
                            </th>
                            <th scope="col" className="relative px-6 py-3">
                                <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {reservations?.map((reservation, index) => (
                            <tr key={index}>
                                <td className="px-3 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0 h-10 w-10">
                                            <img className="h-10 w-10 rounded-full" src={reservation?.guest?.avatarURL} alt="" />
                                        </div>
                                        <div className="ml-4">
                                            <div className="text-sm font-medium text-gray-900">{reservation?.guest?.name}</div>
                                            <div className="text-sm text-gray-500">{reservation?.guest?.email}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-3 py-4 whitespace-nowrap truncate">
                                    <div className="text-sm text-gray-900">{reservation?.property?.propertyName}</div>
                                </td>
                                <td className="px-3 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">{reservation?.from}</div>
                                    <div className="text-sm text-gray-900">{reservation?.to}</div>
                                </td>
                                <td className="px-3 py-4 whitespace-nowrap">
                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                        Pending
                                    </span>
                                </td>
                                <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                                    <div className="text-sm text-gray-900">{reservation?.property?.hostInfo?.name}</div>
                                    <div className="text-sm text-gray-900">{reservation?.property?.hostInfo?.email}</div>
                                </td>
                                <td className="px-3 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                        Edit
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
      </div>
    )
  }
