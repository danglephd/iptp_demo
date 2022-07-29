import MaterialTable from 'material-table';
import { data } from './data';

const MTable = () => {
    const columns = [
        { title: 'ID', field: 'id' },
        { title: 'User ID', field: 'userId' },
        { title: 'Title', field: 'title' },
        { title: 'Action', field: 'action' }
    ];
    return (
        <div style={{ maxWidth: '100%' }}>
            <MaterialTable columns={columns} data={data} title='Books Directory' />
        </div>
    );
};
export default MTable;