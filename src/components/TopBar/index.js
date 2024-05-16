import { LogoutOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons'
import { UserCircle } from '@phosphor-icons/react'
import { Button, Dropdown, Space } from 'antd'
import React from 'react'

const items = [
    // {
    //     key: '1',
    //     label: (
    //         <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
    //             1st menu item
    //         </a>
    //     ),
    // },
    // {
    //     key: '2',
    //     label: (
    //         <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
    //             2nd menu item (disabled)
    //         </a>
    //     ),
    //     icon: <SmileOutlined />,
    //     disabled: true,
    // },
    {
        key: '3',
        icon: <UserOutlined />,
        label: 'Username',
    },
    {
        type: 'divider',
    },
    {
        key: '4',
        icon: <LogoutOutlined />,
        danger: true,
        label: 'Logout',
    },
];

const TopBar = () => {
    return (
        <div className="bg-white p-4">
            <div className="flex justify-between items-center">
                <input placeholder="Search..." className="" />
                <div className="flex gap-2">
                    <Dropdown
                        menu={{
                            items,
                        }}
                    >
                        <a onClick={(e) => e.preventDefault()}>
                            <div className="py-2 px-3 hover:bg-gray-100 rounded-full">
                                <SettingOutlined />
                            </div>
                        </a>
                    </Dropdown>
                </div>
            </div>
        </div>
    )
}

export default TopBar