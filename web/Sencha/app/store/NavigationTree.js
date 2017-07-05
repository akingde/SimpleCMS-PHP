Ext.define('SimpleCMS.store.NavigationTree', {
    extend: 'Ext.data.TreeStore',

    storeId: 'NavigationTree',

    fields: [{
        name: 'text'
    }],

    root: {
        expanded: true,
        children: [
            {
                text: '�հ�ҳ',
                viewType: 'pageblank',
                leaf: true,
                visible: false
            },
            {
                text: '500',
                viewType: 'page500',
                leaf: true,
                visible: false
            },
            {
                text: '��¼',
                viewType: 'login',
                leaf: true,
                visible: false
            },
            {
                text: '�޸�����',
                viewType: 'passwordreset',
                leaf: true,
                visible: false
            }
        ]
    }
});
