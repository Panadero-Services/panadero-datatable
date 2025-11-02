<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ERP Inventory Test</title>
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        .container { max-width: 1200px; margin: 0 auto; }
        .status { padding: 10px; margin: 10px 0; border-radius: 5px; }
        .success { background-color: #d4edda; color: #155724; border: 1px solid #c3e6cb; }
        .error { background-color: #f8d7da; color: #721c24; border: 1px solid #f5c6cb; }
        .loading { background-color: #d1ecf1; color: #0c5460; border: 1px solid #bee5eb; }
        table { width: 100%; border-collapse: collapse; margin-top: 20px; }
        th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
        th { background-color: #f2f2f2; }
        .tabs { margin: 20px 0; }
        .tab { padding: 10px 20px; margin-right: 10px; background-color: #f0f0f0; border: none; cursor: pointer; }
        .tab.active { background-color: #007bff; color: white; }
        .tab-content { display: none; }
        .tab-content.active { display: block; }
    </style>
</head>
<body>
    <div id="app" class="container">
        <h1>ERP Inventory Test</h1>
        
        <div class="status" :class="statusClass">
            <?php echo e(statusMessage); ?>

        </div>
        
        <div class="tabs">
            <button class="tab" :class="{ active: activeTab === 'customers' }" @click="activeTab = 'customers'">
                Customers (<?php echo e(customers.length); ?>)
            </button>
            <button class="tab" :class="{ active: activeTab === 'suppliers' }" @click="activeTab = 'suppliers'">
                Suppliers (<?php echo e(suppliers.length); ?>)
            </button>
            <button class="tab" :class="{ active: activeTab === 'products' }" @click="activeTab = 'products'">
                Products (<?php echo e(products.length); ?>)
            </button>
            <button class="tab" :class="{ active: activeTab === 'orders' }" @click="activeTab = 'orders'">
                Orders (<?php echo e(ordersIn.length + ordersOut.length); ?>)
            </button>
        </div>
        
        <div class="tab-content" :class="{ active: activeTab === 'customers' }">
            <h3>Customers</h3>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Identifier</th>
                        <th>Active</th>
                        <th>Comment</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="customer in customers" :key="customer.id">
                        <td><?php echo e(customer.id); ?></td>
                        <td><?php echo e(customer.name); ?></td>
                        <td><?php echo e(customer.identifier); ?></td>
                        <td><?php echo e(customer.is_active ? 'Yes' : 'No'); ?></td>
                        <td><?php echo e(customer.comment); ?></td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        <div class="tab-content" :class="{ active: activeTab === 'suppliers' }">
            <h3>Suppliers</h3>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Identifier</th>
                        <th>Active</th>
                        <th>Comment</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="supplier in suppliers" :key="supplier.id">
                        <td><?php echo e(supplier.id); ?></td>
                        <td><?php echo e(supplier.name); ?></td>
                        <td><?php echo e(supplier.identifier); ?></td>
                        <td><?php echo e(supplier.is_active ? 'Yes' : 'No'); ?></td>
                        <td><?php echo e(supplier.comment); ?></td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        <div class="tab-content" :class="{ active: activeTab === 'products' }">
            <h3>Products</h3>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Code</th>
                        <th>Unit ID</th>
                        <th>Product Type ID</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in products" :key="product.id">
                        <td><?php echo e(product.id); ?></td>
                        <td><?php echo e(product.name); ?></td>
                        <td><?php echo e(product.code); ?></td>
                        <td><?php echo e(product.unit_id); ?></td>
                        <td><?php echo e(product.product_type_id); ?></td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        <div class="tab-content" :class="{ active: activeTab === 'orders' }">
            <h3>Orders</h3>
            <h4>Incoming Orders (<?php echo e(ordersIn.length); ?>)</h4>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Order Number</th>
                        <th>Supplier ID</th>
                        <th>Site ID</th>
                        <th>Status ID</th>
                        <th>Created</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="order in ordersIn" :key="order.id">
                        <td><?php echo e(order.id); ?></td>
                        <td><?php echo e(order.ordernr); ?></td>
                        <td><?php echo e(order.supplier_id); ?></td>
                        <td><?php echo e(order.site_id); ?></td>
                        <td><?php echo e(order.status_id); ?></td>
                        <td><?php echo e(new Date(order.created_at).toLocaleDateString()); ?></td>
                    </tr>
                </tbody>
            </table>
            
            <h4>Outgoing Orders (<?php echo e(ordersOut.length); ?>)</h4>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Order Number</th>
                        <th>Customer ID</th>
                        <th>Site ID</th>
                        <th>Status ID</th>
                        <th>Created</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="order in ordersOut" :key="order.id">
                        <td><?php echo e(order.id); ?></td>
                        <td><?php echo e(order.ordernr); ?></td>
                        <td><?php echo e(order.customer_id); ?></td>
                        <td><?php echo e(order.site_id); ?></td>
                        <td><?php echo e(order.status_id); ?></td>
                        <td><?php echo e(new Date(order.created_at).toLocaleDateString()); ?></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <script>
        const { createApp } = Vue;
        
        createApp({
            data() {
                return {
                    activeTab: 'customers',
                    customers: [],
                    suppliers: [],
                    products: [],
                    ordersIn: [],
                    ordersOut: [],
                    statusMessage: 'Loading ERP data...',
                    statusClass: 'loading'
                }
            },
            async mounted() {
                await this.loadErpData();
            },
            methods: {
                async loadErpData() {
                    try {
                        this.statusMessage = 'Loading ERP data...';
                        this.statusClass = 'loading';
                        
                        const [customersRes, suppliersRes, productsRes, ordersInRes, ordersOutRes] = await Promise.all([
                            axios.get('/customers'),
                            axios.get('/suppliers'),
                            axios.get('/products'),
                            axios.get('/orders-in'),
                            axios.get('/orders-out')
                        ]);
                        
                        this.customers = customersRes.data;
                        this.suppliers = suppliersRes.data;
                        this.products = productsRes.data;
                        this.ordersIn = ordersInRes.data;
                        this.ordersOut = ordersOutRes.data;
                        
                        this.statusMessage = `ERP data loaded successfully! Found ${this.customers.length} customers, ${this.suppliers.length} suppliers, ${this.products.length} products, ${this.ordersIn.length} incoming orders, and ${this.ordersOut.length} outgoing orders.`;
                        this.statusClass = 'success';
                        
                    } catch (error) {
                        console.error('Error loading ERP data:', error);
                        this.statusMessage = `Error loading ERP data: ${error.message}`;
                        this.statusClass = 'error';
                    }
                }
            }
        }).mount('#app');
    </script>
</body>
</html>
<?php /**PATH /Users/lib/Dropbox/wwwdevelop/sites/i3v2-bots/resources/views/test-inventory.blade.php ENDPATH**/ ?>