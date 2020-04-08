import React from "react";

export default function NoData() {
    return (
        <p className="text-center bg-gray-100 border p-6 rounded w-full text-gray-700 text-lg">
            No existen datos :(
        </p>
    );
}

export function HasError() {
    return (
        <p className="text-center bg-red-100 border border-red-500 p-6 rounded w-full text-red-500 text-lg">
            Error, no se pudo obtener datos :(
        </p>
    );
}
