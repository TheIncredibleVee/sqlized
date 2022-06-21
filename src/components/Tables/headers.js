
export const headers = [
    [
	{
		field: "categoryID",
        name: "Category"
		
	},
	{
        field: "description",
        name: "Description"
	},
	{
        field: "name",
        name: "Name"
	},
    ],
    [
        {
            field: "customerID",
            name: "Customer",
        },
        {
            field: "companyName",
            name: "Company Name"
        },
        {
		field: "contactName",
		name: "Contact Name",
        },
        {
            field: "contactTitle",
            name: "Contact Title",
        },
        {
                field: "address",
                name: "Address",
        },
        {
            field: "city",
            name: "City",
        },
        {
            field: "region",
            name: "Region",
        },
        {
            field: "postalCode",
            name: "Postal Code",
        },
        {  
            field: "country",
            name: "Country",
        },
        {
            field: "phone",
            name: "Phone",
        },

    ],
    [
        {
            field : 'employeeID',
            name: "Employee ID",
        },
        {
            field: 'territoryID',
            name: "Territory ID",
        }
    ],
    [
        {
            field : 'employeeID',
            name: "Employee ID",
        },
        {
            field: 'lastName',
            name: "Last Name",
        },
        {
            field: 'firstName',
            name: "First Name",
        },
        {
            field: 'title',
            name: "Title",
        },
        {
            field: 'titleOfCourtesy',
            name: "Title of Courtesy",

        },
        {
            field: 'birthDate',
            name: "Birth Date",
        },
        {
            field: 'hireDate',
            name: "Hire Date",
        },
        {
            field: 'address',
            name: "Address",
        },
        {
            field: 'city',
            name: "City",
        },
        {
            field: 'region',
            name: "Region",
        },
        {
            field: 'postalCode',
            name: "Postal Code",
        },
        {
            field: 'country',
            name: "Country",
        },
        {
            field: 'homePhone',
            name: "Home Phone",
        },
        {
            field: 'extension',
            name: "Extension",
        },
        {
            field: 'notes',
            name: "Notes",
        },
        {
            field: 'reportsTo',
            name: "Reports To",

        },
        {
            field: 'photoPath',
            name: "Photo Path",
        
        },
        {
            field: 'photo',
            name: "Photo",

        }
    ],
    [
        {
            field : 'productID',
            name: "Product ID",

        },
        {
            field: 'orderID',
            name: "Order ID",

        },
        {
            field: 'unitPrice',
            name: "Unit Price",
        },
        {
            field: 'quantity',
            name: "Quantity",
        },
        {
            field: 'discount',
            name: "Discount",
        }
    ],
    [
        {
            field : 'orderID',
            name: "Order ID",
        },
        {
            field: 'customerID',
            name: "Customer ID",
        },
        {
            field: 'employeeID',
            name: "Employee ID",
        },
        {
            field: 'orderDate',
            name: "Order Date",
        },
        {
            field: 'requiredDate',
            name: "Required Date",
        },
        {
            field: 'shippedDate',
            name: "Shipped Date",
        },
        {
            field: 'shipVia',
            name: "Ship Via",
        },
        {
            field: 'freight',
            name: "Freight",
        },
        {
            field: 'shipName',
            name: "Ship Name",
        },
        {
            field: 'shipAddress',
            name: "Ship Address",
        },
        {
            field: 'shipCity',
            name: "Ship City",
        },
        {
            field: 'shipRegion',
            name: "Ship Region",
        },
        {
            field: 'shipPostalCode',
            name: "Ship Postal Code",
        },
        {
            field: 'shipCountry',
            name: "Ship Country",
        }
    ],
    [
        {
            field : 'productID',
            name: "Product ID",
        },
        {
            field: 'productName',
            name: "Product Name",
        },
        {
            field: 'supplierID',
            name: "Supplier ID",
        },
        {
            field: 'categoryID',
            name: "Category ID",
        },
        {
            field: 'quantityPerUnit',
            name: "Quantity Per Unit",
        },
        {
            field: 'unitPrice',
            name: "Unit Price",
        },
        {
            field: 'unitsInStock',
            name: "Units In Stock",
        },
        {
            field: 'unitsOnOrder',
            name: "Units On Order",
        },
        {
            field: 'reorderLevel',
            name: "Reorder Level",
        },
        {
            field: 'discontinued',
            name: "Discontinued",
        }
    ],
    [
        //regionID,regionDescription
        {
            field : 'regionID',
            name: "Region ID",
        },
        {
            field: 'regionDescription',
            name: "Region Description",
        }
    ],
    [
        //shipperID,companyName,phone
        {
            field : 'shipperID',
            name: "Shipper ID",
        },
        {
            field: 'companyName',
            name: "Company Name",

        },
        {
            field: 'phone',
            name: "Phone",
        }
    ],
    [
        //supplierID,companyName,contactName,contactTitle,address,city,region,postalCode,country,phone,fax,homePage
        {
            field : 'supplierID',
            name: "Supplier ID",

        },
        {
            field: 'companyName',
            name: "Company Name",
        },
        {
            field: 'contactName',
            name: "Contact Name",
        },
        {
            field: 'contactTitle',
            name: "Contact Title",
        },
        {
            field: 'address',
            name: "Address",
        },
        {
            field: 'city',
            name: "City",
        },
        {
            field: 'region',
            name: "Region",
        },
        {
            field: 'postalCode',
            name: "Postal Code",
        },
        {
            field: 'country',
            name: "Country",
        },
        {
            field: 'phone',
            name: "Phone",
        },
        {
            field: 'fax',
            name: "Fax",
        },
        {
            field: 'homePage',
            name: "Home Page",
        }
    ],
    [
        //territoryID,territoryDescription,regionID
        {
            field : 'territoryID',
            name: "Territory ID",
        },
        {
            field: 'territoryDescription',
            name: "Territory Description",
        },
        {
            field: 'regionID',
            name: "Region ID",
        },
        {
            field: 'regionDescription',
            name: "Region Description",

        }
    ]
]
