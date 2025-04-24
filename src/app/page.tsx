
"use client";
import React, { useEffect, useState } from "react";
import DataTable, { Column } from '@/components/DataTable';


  const flattenData = (data: any[]) => {
    return data.flatMap((component) => {
      return component.subcomponents.map((subcomponent: any) => ({
        component_id: component.component_id,
        component_name: component.component_name,
        parent_component_id: component.parent_component_id,
        subcomponent_id: subcomponent.component_id,
        subcomponent_name: subcomponent.component_name,
        sku_code: subcomponent.sku_code,
        hsn_code: subcomponent.hsn_code,
        total_quantity: subcomponent.total_quantity,
        usable_quantity: subcomponent.usable_quantity,
        damaged_quantity: subcomponent.damaged_quantity,
        discarded_quantity: subcomponent.discarded_quantity,
        last_updated: subcomponent.last_updated,
      }));
    });
  };


  const MyTable = () => {
    const [data, setData] = useState<any[]>([]);
  
    useEffect(() => {
      // Fetch data from API
      const fetchData = async () => {
        const response = await fetch("/api/inventory");
        const apiData = await response.json();
  
        // Flatten the API data
        const flatData = flattenData(apiData);
        setData(flatData);
      };
  
      fetchData();
    }, []);

  const columns: Column<any>[] = [
    { accessor: "component_name", header: "Parent Component" },
    { accessor: "subcomponent_name", header: "Sub Component" },
    { accessor: "usable_quantity", header: "Usable Quantity" }, 
    { accessor: "discarded_quantity", header: "Discarded Quantity" },
    { accessor: "damaged_quantity", header: "Damaged" },
    { accessor: "total_quantity", header: "Total Quantity" },
  ];

  return <DataTable data={data} columns={columns} />;
};

export default MyTable;

