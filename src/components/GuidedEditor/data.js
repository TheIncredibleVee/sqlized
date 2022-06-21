export const commands = [
    "SELECT",
    "UPDATE",
    "DELETE",
    "INSERT INTO",
    // "CREATE DATABASE",
    // "ALTER DATABASE",
    "CREATE TABLE",
    "ALTER TABLE",
    // "DROP TABLE",
    // "CREATE INDEX",
    // "DROP INDEX",
]


export const select = {
    'name' : 'select',
    'description' : 'Some Description for Select',
    'fields' : [
        {
            'type' : 'text',
            'label' : 'Select',
            'value' : 'SELECT',
        },
        {
            'type' : 'input',
            'label' : 'Columns',
            'value' : '*',
        },
        {
            'type' : 'text',
            'label' : 'from',
            'value' : 'FROM',
        },
        {
            'type' : 'input',
            'label' : 'Table Name',
            'value' : 'Customers'
        },
        {
            'type' : 'text',
            'label' : 'where',
            'value' : 'WHERE',
        },
        {
            'type' : 'input',
            'label' : 'condition',
            'value' : 'salary > 100',
        },
    ]
}

export const update = {
    'name' : 'Upate',
    'description' : 'Some Description for update',
    'fields' : [
        {
            'type' : 'text',
            'label' : 'Update',
            'value' : 'UPDATE',
        },
        {
            'type' : 'input',
            'label' : 'Table Name',
            'value' : 'Customers'
        },
        {
            'type' : 'text',
            'label' : 'set',
            'value' : 'SET',
        },
        {
            'type' : 'input',
            'label' : 'Columns Values',
            'value' : 'column1 = value1, column2 = value2',
        },
        {
            'type' : 'text',
            'label' : 'where',
            'value' : 'WHERE',
        },
        {
            'type' : 'input',
            'label' : 'condition',
            'value' : 'salary > 100',
        },
    ]
}
export const del = {
    'name' : 'Delete',
    'description' : 'Some Description for delete',
    'fields' : [
        {
            'type' : 'text',
            'label' : 'delete',
            'value' : 'DELETE',
        },
        {
            'type' : 'text',
            'label' : 'from',
            'value' : 'FROM',
        },
        {
            'type' : 'input',
            'label' : 'Table Name',
            'value' : 'Customers'
        },
        {
            'type' : 'text',
            'label' : 'where',
            'value' : 'WHERE',
        },
        {
            'type' : 'input',
            'label' : 'condition',
            'value' : 'salary > 100',
        },
    ]
}

export const insertInto ={
    'name' : 'Insert Into',
    'description' : 'Some Description for insert into',
    'fields' : [
        {
            'type' : 'text',
            'label' : 'insert',
            'value' : 'INSERT',
        },
        {
            'type' : 'text',
            'label' : 'into',
            'value' : 'INTO',
        },
        {
            'type' : 'input',
            'label' : 'Table Name',
            'value' : 'Customers'
        },
        {
            'type' : 'input',
            'label' : 'columns',
            'value' : '(column1, column2, column3)',
        },
        {
            'type' : 'text',
            'label' : 'values',
            'value' : 'VALUES',
        },
        {
            'type' : 'input',
            'label' : 'values',
            'value' : '(value1, value2, value3)',
        },
    ]
}

export const createTable = {
    'name' : 'Create Table',
    'description' : 'Some Description for create table',
    'fields' : [
        {
            'type' : 'text',
            'label' : 'create',
            'value' : 'CREATE',
        },
        {
            'type' : 'text',
            'label' : 'table',
            'value' : 'TABLE',
        },
        {
            'type' : 'input',
            'label' : 'Table Name',
            'value' : 'Customers'
        },
        {
            'type' : 'input',
            'label' : 'columns',
            'value' : '(column1 datatype, column2 datatype, column3 datatype)',
        }
    ]
}

export const alterTable = {
    'name' : 'Alter Table',
    'description' : 'Some Description for alter table',
    'fields' : [
        {
            'type' : 'text',
            'label' : 'alter',
            'value' : 'ALTER',
        },
        {
            'type' : 'text',
            'label' : 'table',
            'value' : 'TABLE',
        },
        {
            'type' : 'input',
            'label' : 'Table Name',
            'value' : 'Customers'
        },
        {
            'type' : 'text',
            'label' : 'add',
            'value' : 'ADD',
        },
        {
            'type' : 'input',
            'label' : 'columns',
            'value' : '(column1 datatype, column2 datatype, column3 datatype)',
        }
    ]
}


export const mapping={
    "SELECT": select,
    "UPDATE": update,
    "DELETE": del,
    "INSERT INTO": insertInto,
    "CREATE TABLE": createTable,
    "ALTER TABLE": alterTable,
}