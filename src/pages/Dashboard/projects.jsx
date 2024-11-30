import { Dialog, Transition } from '@headlessui/react';
import { FolderIcon, PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createProject, deleteProject } from '../../redux/projects/projectsSlice';

const ProjectsPage = () => {
    const dispatch = useDispatch();
    const projects = useSelector((state) => state.projects.list);
    const [isNewProjectModalOpen, setIsNewProjectModalOpen] = useState(false);
    const [newProjectName, setNewProjectName] = useState('');

    const handleCreateProject = () => {
        if (newProjectName.trim()) {
            dispatch(createProject({ name: newProjectName.trim() }));
            setNewProjectName('');
            setIsNewProjectModalOpen(false);
        }
    };

    const handleDeleteProject = (projectId) => {
        if (window.confirm('Are you sure you want to delete this project?')) {
            dispatch(deleteProject(projectId));
        }
    };

    return (
        <div className="h-full bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-extrabold text-gray-900">Projects</h1>
                    <button
                        onClick={() => setIsNewProjectModalOpen(true)}
                        className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                        New Project
                    </button>
                </div>

                {projects.length === 0 ? (
                    <div className="text-center py-12">
                        <FolderIcon className="mx-auto h-12 w-12 text-gray-400" />
                        <h3 className="mt-2 text-sm font-medium text-gray-900">No projects</h3>
                        <p className="mt-1 text-sm text-gray-500">Get started by creating a new project.</p>
                    </div>
                ) : (
                    <div className="bg-white shadow overflow-hidden sm:rounded-md">
                        <ul className="divide-y divide-gray-200">
                            {projects.map((project) => (
                                <li key={project.id}>
                                    <div className="px-4 py-4 flex items-center sm:px-6">
                                        <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                                            <div>
                                                <h3 className="text-lg font-medium text-indigo-600 truncate">{project.name}</h3>
                                                <p className="mt-1 text-sm text-gray-500">
                                                    Created on {new Date(project.createdAt).toLocaleDateString()}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="ml-5 flex-shrink-0 flex space-x-2">
                                            <button
                                                className="p-2 rounded-full text-indigo-600 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                onClick={() => {/* Implement edit functionality */ }}
                                            >
                                                <PencilIcon className="h-5 w-5" aria-hidden="true" />
                                            </button>
                                            <button
                                                className="p-2 rounded-full text-red-600 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                                onClick={() => handleDeleteProject(project.id)}
                                            >
                                                <TrashIcon className="h-5 w-5" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            <Transition show={isNewProjectModalOpen} as={React.Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto"
                    onClose={() => setIsNewProjectModalOpen(false)}
                >
                    <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                            as={React.Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                        </Transition.Child>

                        <span className="inline-block h-screen align-middle" aria-hidden="true">&#8203;</span>

                        <Transition.Child
                            as={React.Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                    Create New Project
                                </Dialog.Title>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        value={newProjectName}
                                        onChange={(e) => setNewProjectName(e.target.value)}
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        placeholder="Enter project name"
                                    />
                                </div>

                                <div className="mt-4 flex justify-end">
                                    <button
                                        type="button"
                                        className="mr-2 inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        onClick={() => setIsNewProjectModalOpen(false)}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="button"
                                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        onClick={handleCreateProject}
                                    >
                                        Create
                                    </button>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </div>
    );
};

export default ProjectsPage;

