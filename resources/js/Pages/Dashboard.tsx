import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, useForm} from '@inertiajs/react';
import {PageProps} from '@/types';
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import {FormEventHandler} from "react";

export default function Dashboard({auth}: PageProps) {
    const {data, setData, post, processing, errors, reset} = useForm(
        {
            mailSalutation: 'Firma',
            mainAddress: {
                gender: 'Firma',
                title: '',
                name: '',
                firstName: '',
                lastName: '',
                street: '',
                houseNumber: '',
                postalCode: '',
                city: '',
                country: 'Deutschland',
                mobilePhone: '',
                phone: '',
                email: '',
            }
        }
    );

    const submitLead: FormEventHandler = (e) => {
        e.preventDefault();


        console.log('fa:: submitLead')

        post(route('lead'));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard"/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">

                            <div className="space-y-10 divide-y divide-gray-900/10">

                                <div className="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3">
                                    <div className="px-4 sm:px-0">
                                        <h2 className="text-base font-semibold leading-7 text-gray-900">
                                            Information</h2>
                                        <p className="mt-1 text-sm leading-6 text-gray-600">
                                            Verwenden Sie eine ständige Adresse wo Sie Post empfangen können.
                                        </p>
                                    </div>

                                    <form onSubmit={submitLead}
                                          className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
                                        <div className="px-4 py-6 sm:p-8">
                                            <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                                                <div className="sm:col-span-6">
                                                    <label htmlFor="mailSalutation"
                                                           className="block text-sm font-medium leading-6 text-gray-900">
                                                        Anrede
                                                    </label>
                                                    <div className="mt-2">
                                                        <select
                                                            id="mailSalutation"
                                                            name="mailSalutation"
                                                            autoComplete="mailSalutation"
                                                            value={data.mainAddress.gender}
                                                            onChange={(e) => setData( 'mainAddress', {...data.mainAddress, gender: e.target.value })}

                                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                                        >
                                                            <option value={'Firma'}>Firma</option>
                                                            <option value={'Frau'}>Frau</option>
                                                            <option value={'Herr'}>Herr</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="sm:col-span-6">
                                                    <InputLabel htmlFor="company" value="Firma"/>
                                                    <TextInput
                                                        id="company"
                                                        type="text"
                                                        name="company"
                                                        value={data.mainAddress.name}
                                                        className="mt-1 block w-full"
                                                        autoComplete="company"
                                                        isFocused={true}
                                                        onChange={(e) => setData( 'mainAddress', {...data.mainAddress, name: e.target.value })}
                                                    />
                                                </div>

                                                <div className="sm:col-span-3">
                                                    <InputLabel htmlFor="firstName" value="Vorname"/>
                                                    <TextInput
                                                        id="firstName"
                                                        type="text"
                                                        name="firstName"
                                                        value={data.mainAddress.firstName}
                                                        className="mt-1 block w-full"
                                                        autoComplete="firstName"
                                                        isFocused={true}
                                                        onChange={(e) => setData( 'mainAddress', {...data.mainAddress, firstName: e.target.value })}
                                                    />
                                                </div>

                                                <div className="sm:col-span-3">
                                                    <InputLabel htmlFor="lastName" value="Nachname"/>
                                                    <TextInput
                                                        id="lastName"
                                                        type="text"
                                                        name="lastName"
                                                        value={data.mainAddress.lastName}
                                                        className="mt-1 block w-full"
                                                        autoComplete="lastName"
                                                        isFocused={true}
                                                        onChange={(e) => setData('mainAddress', {...data.mainAddress, lastName: e.target.value })}
                                                    />
                                                </div>


                                                <div className="sm:col-span-4">
                                                    <InputLabel htmlFor="street" value="Straße"/>
                                                    <TextInput
                                                        id="street"
                                                        type="text"
                                                        name="street"
                                                        value={data.mainAddress.street}
                                                        className="mt-1 block w-full"
                                                        autoComplete="street"
                                                        isFocused={true}
                                                        onChange={(e) => setData('mainAddress', {...data.mainAddress, street: e.target.value })}
                                                    />
                                                </div>

                                                <div className="sm:col-span-2">
                                                    <InputLabel htmlFor="houseNumber" value="Hausnummer"/>
                                                    <TextInput
                                                        id="houseNumber"
                                                        type="text"
                                                        name="houseNumber"
                                                        value={data.mainAddress.houseNumber}
                                                        className="mt-1 block w-full"
                                                        autoComplete="houseNumber"
                                                        isFocused={true}
                                                        onChange={(e) => setData('mainAddress', {...data.mainAddress, houseNumber: e.target.value })}
                                                    />
                                                </div>

                                                <div className="sm:col-span-2">
                                                    <InputLabel htmlFor="postalCode" value="PLZ"/>
                                                    <TextInput
                                                        id="postalCode"
                                                        type="text"
                                                        name="postalCode"
                                                        value={data.mainAddress.postalCode}
                                                        className="mt-1 block w-full"
                                                        autoComplete="postalCode"
                                                        isFocused={true}
                                                        onChange={(e) => setData('mainAddress', {...data.mainAddress, postalCode: e.target.value })}
                                                    />
                                                </div>

                                                <div className="sm:col-span-4">
                                                    <InputLabel htmlFor="city" value="Stadt"/>
                                                    <TextInput
                                                        id="city"
                                                        type="text"
                                                        name="city"
                                                        value={data.mainAddress.city}
                                                        className="mt-1 block w-full"
                                                        autoComplete="city"
                                                        isFocused={true}
                                                        onChange={(e) => setData('mainAddress', {...data.mainAddress, city: e.target.value })}
                                                    />
                                                </div>

                                                <div className="col-span-6">
                                                    <InputLabel htmlFor="mobilePhone" value="Mobile"/>
                                                    <TextInput
                                                        id="mobilePhone"
                                                        type="text"
                                                        name="mobilePhone"
                                                        value={data.mainAddress.mobilePhone}
                                                        className="mt-1 block w-full"
                                                        autoComplete="mobilePhone"
                                                        isFocused={true}
                                                        onChange={(e) => setData('mainAddress', {...data.mainAddress, mobilePhone: e.target.value })}
                                                    />
                                                </div>
                                                <div className="col-span-6">
                                                    <InputLabel htmlFor="phone" value="Telefon"/>
                                                    <TextInput
                                                        id="phone"
                                                        type="text"
                                                        name="phone"
                                                        value={data.mainAddress.phone}
                                                        className="mt-1 block w-full"
                                                        autoComplete="mobile"
                                                        isFocused={true}
                                                        onChange={(e) => setData('mainAddress', {...data.mainAddress, phone: e.target.value })}
                                                    />
                                                </div>
                                                <div className="col-span-6">
                                                    <InputLabel htmlFor="email" value="E-Mail"/>
                                                    <TextInput
                                                        id="email"
                                                        type="text"
                                                        name="email"
                                                        value={data.mainAddress.email}
                                                        className="mt-1 block w-full"
                                                        autoComplete="email"
                                                        isFocused={true}
                                                        onChange={(e) => setData('mainAddress', {...data.mainAddress, email: e.target.value })}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
                                            <button type="button"
                                                    className="text-sm font-semibold leading-6 text-gray-900">
                                                Abbrechen
                                            </button>
                                            <button
                                                type="submit"
                                                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                            >
                                                Speichern
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
