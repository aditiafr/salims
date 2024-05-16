import { HddOutlined, LayoutOutlined } from '@ant-design/icons';
import { Desktop, List } from '@phosphor-icons/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar';

const SidebarContent = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");

    // console.log('Select Menu', selected);

    return (
        <div className="flex sticky h-screen z-100 top-0 bottom-0 ">
            <Sidebar collapsed={isCollapsed} backgroundColor="#FFFFFF">
                <Menu iconShape="square">
                    {!isCollapsed ? (
                        <div className="flex justify-between items-center px-[10%] py-4">
                            <Image src="/assets/image/salims.png" alt="..." width={100} height={100} />
                            <button onClick={() => setIsCollapsed(!isCollapsed)} className="hover:bg-gray-100 rounded-full p-2">
                                <List size={32} />
                            </button>
                        </div>
                    ) : (
                        <MenuItem
                            onClick={() => setIsCollapsed(!isCollapsed)}
                            icon={isCollapsed ? <List size={32} /> : undefined}
                        >
                        </MenuItem>
                    )}

                    {isCollapsed && (
                        <div className="items-center p-2">
                            <Image src="/assets/image/salims.png" alt="..." width={100} height={100} />
                        </div>
                    )}

                    {!isCollapsed && (
                        <div className="mb-5">
                            <div className="text-center">
                                <h2>
                                    Admin name
                                </h2>
                                <h5>
                                    Welcome
                                </h5>
                            </div>
                        </div>
                    )}

                    <div style={{ paddingLeft: isCollapsed ? undefined : "10%" }}>
                        <div>
                            <MenuItem
                                component={<Link href="/dashboard" />}
                                icon={<LayoutOutlined />}
                                active={selected}
                                onClick={() => setSelected("Dashboard")}
                            >
                                Dashboard
                            </MenuItem>
                            <p className={`text-md font-bold my-2 ${isCollapsed ? "p-2 text-center text-sm" : ""}`}>
                                MASTER DATA
                            </p>
                            <MenuItem
                                component={<Link href="/master/building" />}
                                icon={<HddOutlined />}
                                active={selected}
                                onClick={() => setSelected("Building")}
                            >
                                Building
                            </MenuItem>
                        </div>
                    </div>
                </Menu>
            </Sidebar>
        </div>
    );
};

export default SidebarContent;
