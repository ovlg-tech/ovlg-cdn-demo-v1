import CreditorListData from '../../../contents/success/stories/creditor-list-data.json'

export default function CreditorsList() {
    return (
        <>
            <div className="table-responsive">
                <table id="creditorlist" className="table table-striped" style={{ width: "100%" }}>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Creditor Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {CreditorListData.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td><a href={item.url} className="text-capitalize">{item.name}</a></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}