import React from "react";
import { useTranslation } from "react-i18next";
import BootstrapTable from 'react-bootstrap-table-next';
import {
    Col,
    Button
  } from "react-bootstrap";
import moment from "moment";

function TransactionHistory(props) {
    const { t } = useTranslation();
    let dataWithIds = [];
    if(props?.userSecurity){
        dataWithIds = props?.userSecurity.map((item, index) => ({
            ...item,
            newId: index + 1
        }));
    }
    
    const columns = [{
        dataField: 'newId',
        text: t('Id'),
        sort: true,
    },{
        dataField: 'tradeDate',
        text: t('Trade Date'),
        formatter: (cell, row) => {
            if (cell)
              return moment(cell).format("DD MMM yyyy");
        },
    }, {
        dataField: 'trxType',
        text: 'Trx. Type'
    },{
        dataField: 'security.name',
        text: 'Security Name'
    },{
        dataField: 'qty',
        text: 'Qty'
    },{
        dataField: 'security.currencyCode',
        text: 'Sec. Currency'
    },{
        dataField: 'priceInSecurityCurrency',
        text: 'Price (Sec. Cur)',
        formatter: (cell, row) => {
            if (cell)
              return cell.toFixed(3);
        },
    },{
        dataField: 'netAmountInSecurityCurrency',
        text: 'Net Amount (Sec. Cur)',
        formatter: (cell, row) => {
            if (cell)
              return cell.toFixed(3);
        },
    },{
        dataField: 'portfolio.investor.currencyCode',
        text: 'Sel. Currency'
    },{
        dataField: 'price',
        text: 'Price (Sel. Cur)',
        formatter: (cell, row) => {
            if (cell)
              return cell.toFixed(3);
        },
    },{
        dataField: 'netAmount',
        text: 'Net Amount (Sel. Cur)',
        formatter: (cell, row) => {
            if (cell)
              return cell.toFixed(3);
        },
    }];

    return (
        props?.userSecurity?
            <Col className="mt-4 table-responsive">
                <h4 className="transaction-heading">{ t('Transaction History')}</h4>
                <BootstrapTable 
                    keyField='id'
                    data={ dataWithIds } 
                    columns={ columns } 
                    noDataIndication={t("Transaction History is empty")}
                    headerWrapperClasses="table-header"
                />
                <Button 
                    variant="dark"
                    className="back-button"
                    onClick={() => props.backHistory()}
                > 
                    { t('Go Back') }
                </Button>
            </Col>
            :
        ""
    );
}

export default TransactionHistory;
