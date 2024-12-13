import { useState } from "react";
const servers = [
    {
        id: 1,
        name: "Server 1",
        status: "Online"
    },
    {
        id: 2,
        name: "Server 2",
        status: "Offline"
    },
    {
        id: 3,
        name: "Server 3",
        status: "Online"
    },
    {
        id: 4,
        name: "Server 4",
        status: "Offline"
    },
    {
        id: 5,
        name: "Server 5",
        status: "Online"
    },
    {
        id: 6,
        name: "Server 6",
        status: "Online"
    },
    {
        id: 7,
        name: "Server 7",
        status: "Offline"
    },
    {
        id: 8,
        name: "Server 8",
        status: "Online"
    },
    {
        id: 9,
        name: "Server 9",
        status: "Online"
    },
    {
        id: 10,
        name: "Server 10",
        status: "Offline"
    },
    {
        id: 11,
        name: "Server 11",
        status: "Online"
    },
    {
        id: 12,
        name: "Server 12",
        status: "Offline"
    },
    {
        id: 13,
        name: "Server 13",
        status: "Online"
    },
    {
        id: 14,
        name: "Server 14",
        status: "Online"
    },
    {
        id: 15,
        name: "Server 15",
        status: "Offline"
    },
    {
        id: 16,
        name: "Server 16",
        status: "Online"
    },
    {
        id: 17,
        name: "Server 17",
        status: "Offline"
    },
    {
        id: 18,
        name: "Server 18",
        status: "Online"
    },
    {
        id: 19,
        name: "Server 19",
        status: "Online"
    },
    {
        id: 20,
        name: "Server 20",
        status: "Offline"
    },


]


const ServersList = () => {
    const [serverStatus, setServerStatus] = useState(servers);
    const [pin, setPin] = useState('');

    const handleCheckboxClick = (serverId) => {
        const enteredPin = prompt('Enter PIN:');
        if (enteredPin === '1234') { // Replace '1234' with your actual pin
            setServerStatus(prevStatus =>
                prevStatus.map(server =>
                    server.id === serverId ? { ...server, status: server.status === 'Online' ? 'Offline' : 'Online' } : server
                )
            );
        } else {
            alert('Incorrect PIN');
        }
    };

    return (
        <div>
            {serverStatus.map(server => (
                <div key={server.id} className='mx-auto my-10 flex justify-between w-8/12'>
                    <h3>{server.name}</h3>
                    <label className="inline-flex items-center me-5 cursor-pointer">
                        <input
                            type="checkbox"
                            value=""
                            className="sr-only peer"
                            checked={server.status === 'Online'}
                            onChange={() => handleCheckboxClick(server.id)}
                        />
                        <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-yellow-300 dark:peer-focus:ring-yellow-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-400 peer-checked:bg-yellow-400"></div>
                    </label>
                </div>
            ))}
        </div>
    );
};

export default ServersList
