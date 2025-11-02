<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="<?php echo e(csrf_token()); ?>">
    <title>AI Training Data Dashboard</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 2rem;
        }
        .container { 
            max-width: 1600px; 
            margin: 0 auto; 
            background: rgba(255,255,255,0.95);
            border-radius: 1rem;
            padding: 1.5rem;
            backdrop-filter: blur(10px);
            display: grid;
            grid-template-columns: 300px 1fr;
            gap: 1.5rem;
        }
        .sidebar {
            background: white;
            border-radius: 0.75rem;
            padding: 1rem;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            height: fit-content;
        }
        .main-content {
            background: white;
            border-radius: 0.75rem;
            padding: 1.5rem;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        h1 { 
            color: #1e293b; 
            margin-bottom: 2rem; 
            text-align: center;
            font-size: 2.5rem;
        }
        .stats-grid { 
            display: grid; 
            grid-template-columns: 1fr 1fr; 
            gap: 0.5rem; 
            margin-bottom: 1rem; 
        }
        .performance-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1rem;
            margin-bottom: 1rem;
        }
        .performance-card {
            background: #f8fafc;
            padding: 1rem;
            border-radius: 0.5rem;
            border: 1px solid #e2e8f0;
        }
        .performance-title {
            font-size: 0.875rem;
            font-weight: 600;
            color: #1f2937;
            margin-bottom: 0.75rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        .metric-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0.25rem 0;
            border-bottom: 1px solid #f3f4f6;
        }
        .metric-row:last-child { border-bottom: none; }
        .metric-name { color: #6b7280; font-size: 0.75rem; }
        .metric-value { font-weight: 600; color: #1f2937; font-size: 0.875rem; }
        .status-indicator {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            display: inline-block;
            margin-right: 0.5rem;
        }
        .status-online { background: #10b981; }
        .status-warning { background: #f59e0b; }
        .status-error { background: #ef4444; }
        .error-details {
            background: white;
            padding: 1.5rem;
            border-radius: 0.75rem;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            margin-bottom: 2rem;
        }
        .error-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0.75rem;
            border-bottom: 1px solid #e5e7eb;
        }
        .error-item:last-child { border-bottom: none; }
        .error-type { font-weight: 600; color: #1f2937; }
        .error-count {
            background: #fef2f2;
            color: #dc2626;
            padding: 0.25rem 0.5rem;
            border-radius: 0.25rem;
            font-size: 0.875rem;
            font-weight: 600;
        }
        .timeout-count { background: #fef3c7; color: #d97706; }
        .api-error-count { background: #fef2f2; color: #dc2626; }
        .refresh-btn {
            background: #667eea;
            color: white;
            border: none;
            padding: 0.75rem 1.5rem;
            border-radius: 0.5rem;
            cursor: pointer;
            font-weight: 600;
            margin-bottom: 1rem;
        }
        .refresh-btn:hover { background: #5a67d8; }
        .loading { text-align: center; padding: 1rem; color: #6b7280; }
        
        @media (max-width: 1200px) {
            .container { 
                grid-template-columns: 250px 1fr; 
                gap: 1rem;
                padding: 1rem;
            }
        }
        
        @media (max-width: 768px) {
            .container { 
                grid-template-columns: 1fr; 
                gap: 1rem;
            }
            .sidebar { order: 2; }
            .main-content { order: 1; }
            .stats-grid { grid-template-columns: repeat(4, 1fr); }
        }
        .stat-card { 
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white; 
            padding: 0.75rem; 
            border-radius: 0.5rem; 
            text-align: center;
        }
        .stat-value { font-size: 1.25rem; font-weight: bold; }
        .stat-label { opacity: 0.9; margin-top: 0.25rem; font-size: 0.75rem; }
        .filters { 
            display: flex; 
            gap: 1rem; 
            margin-bottom: 2rem; 
            flex-wrap: wrap;
            align-items: center;
        }
        .filter-group { display: flex; flex-direction: column; gap: 0.25rem; }
        .filter-group label { font-size: 0.875rem; font-weight: 500; color: #374151; }
        select, button { 
            padding: 0.5rem 1rem; 
            border: 1px solid #d1d5db; 
            border-radius: 0.5rem; 
            font-size: 0.875rem;
        }
        button { 
            background: #667eea; 
            color: white; 
            border: none; 
            cursor: pointer; 
            transition: background 0.2s;
        }
        button:hover { background: #5a67d8; }
        .export-btn { background: #10b981; }
        .export-btn:hover { background: #059669; }
        .approve-btn { background: #f59e0b; }
        .approve-btn:hover { background: #d97706; }
        .data-table { 
            background: white; 
            border-radius: 0.75rem; 
            overflow: hidden; 
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        table { width: 100%; border-collapse: collapse; }
        th, td { 
            padding: 1rem; 
            text-align: left; 
            border-bottom: 1px solid #e5e7eb; 
        }
        th { 
            background: #f8fafc; 
            font-weight: 600; 
            color: #374151; 
        }
        .model-badge { 
            padding: 0.25rem 0.5rem; 
            border-radius: 0.25rem; 
            font-size: 0.75rem; 
            font-weight: 500;
        }
        .sonar-badge { background: #dbeafe; color: #1e40af; }
        .self-badge { background: #fef3c7; color: #d97706; }
        .helpful-yes { color: #10b981; font-weight: 500; }
        .helpful-no { color: #ef4444; font-weight: 500; }
        .helpful-null { color: #6b7280; }
        .query-text { 
            max-width: 300px; 
            overflow: hidden; 
            text-overflow: ellipsis; 
            white-space: nowrap; 
        }
        .response-text { 
            max-width: 400px; 
            overflow: hidden; 
            text-overflow: ellipsis; 
            white-space: nowrap; 
        }
        .pagination { 
            display: flex; 
            justify-content: center; 
            gap: 0.5rem; 
            margin-top: 2rem; 
        }
        .pagination button { 
            padding: 0.5rem 1rem; 
            background: #f3f4f6; 
            color: #374151; 
            border: 1px solid #d1d5db;
        }
        .pagination button.active { 
            background: #667eea; 
            color: white; 
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Left Sidebar - Metrics -->
        <div class="sidebar">
            <h2 style="font-size: 1.25rem; margin-bottom: 1rem; color: #1e293b;">📊 Live Metrics</h2>
          



            <button class="refresh-btn" onclick="refreshMetrics()" style="width: 100%; margin-bottom: 1rem; font-size: 0.875rem; padding: 0.5rem;">🔄 Refresh</button>
            

            <!-- Quick Stats -->
            <div class="stats-grid">
                <div class="stat-card">
                    <div class="stat-value" id="total-interactions"><?php echo e($stats['total'] ?? 0); ?></div>
                    <div class="stat-label">Total</div>
                </div>
                <div class="stat-card">
                    <div class="stat-value" id="success-rate">-</div>
                    <div class="stat-label">Success</div>
                </div>
                <div class="stat-card">
                    <div class="stat-value" id="timeout-rate">-</div>
                    <div class="stat-label">Timeouts</div>
                </div>
                <div class="stat-card">
                    <div class="stat-value" id="avg-response-time">-</div>
                    <div class="stat-label">Avg Time</div>
                </div>
            </div>

            <!-- System Status -->
            <div class="performance-card">
                <div class="performance-title">
                    <span class="status-indicator status-online"></span>
                    System Status
                </div>
                <div class="metric-row">
                    <span class="metric-name">Ollama</span>
                    <span class="metric-value" id="ollama-status">Checking...</span>
                </div>
                <div class="metric-row">
                    <span class="metric-name">API</span>
                    <span class="metric-value" id="api-status">Checking...</span>
                </div>
                <div class="metric-row">
                    <span class="metric-name">Database</span>
                    <span class="metric-value" id="db-status">Connected</span>
                </div>
            </div>

            <!-- Model Usage -->
            <div class="performance-card">
                <div class="performance-title">
                    <span class="status-indicator status-warning"></span>
                    Model Usage
                </div>
                <div class="metric-row">
                    <span class="metric-name">CodeLlama</span>
                    <span class="metric-value" id="codellama-usage">-</span>
                </div>
                <div class="metric-row">
                    <span class="metric-name">Llama3.2</span>
                    <span class="metric-value" id="llama-usage">-</span>
                </div>
                <div class="metric-row">
                    <span class="metric-name">Math Q's</span>
                    <span class="metric-value" id="math-questions">-</span>
                </div>
                <div class="metric-row">
                    <span class="metric-name">Semantic Q's</span>
                    <span class="metric-value" id="semantic-questions">-</span>
                </div>
            </div>

            <!-- Error Summary -->
            <div class="performance-card">
                <div class="performance-title">
                    <span class="status-indicator status-error"></span>
                    Errors (24h)
                </div>
                <div id="error-details-list">
                    <div class="loading" style="font-size: 0.75rem;">Loading...</div>
                </div>
            </div>
        </div>

        <!-- Main Content Area -->
        <div class="main-content">
            <h1 style="font-size: 2rem; margin-bottom: 1.5rem; text-align: left;">🤖 AI Training Data Dashboard</h1>

        <!-- Filters -->
        <div class="filters">
            <div class="filter-group">
                <label>Module</label>
                <select id="moduleFilter">
                    <option value="">All Modules</option>
                    <option value="finance">Finance</option>
                    <option value="hr">HR</option>
                    <option value="inventory">Inventory</option>
                    <option value="compliance">Compliance</option>
                </select>
            </div>
            <div class="filter-group">
                <label>Model</label>
                <select id="modelFilter">
                    <option value="">All Models</option>
                    <option value="sonar-semantic">Sonar (Semantic)</option>
                    <option value="self-math">Self (Math)</option>
                </select>
            </div>
            <div class="filter-group">
                <label>Helpful</label>
                <select id="helpfulFilter">
                    <option value="">All</option>
                    <option value="1">Helpful</option>
                    <option value="0">Not Helpful</option>
                    <option value="null">No Feedback</option>
                </select>
            </div>
            <div class="filter-group">
                <label>Training Status</label>
                <select id="approvedFilter">
                    <option value="">All</option>
                    <option value="1">Approved</option>
                    <option value="0">Pending</option>
                </select>
            </div>
            <button onclick="applyFilters()">Apply Filters</button>
            <button class="export-btn" onclick="exportTrainingData()">📥 Export JSONL</button>
            <button class="approve-btn" onclick="approveSelected()">✅ Approve Selected</button>



        </div>

        <!-- Data Table -->
        <div class="data-table">
            <table>
                <thead>
                    <tr>
                        <th><input type="checkbox" id="selectAll" onchange="toggleSelectAll()"></th>
                        <th>Module</th>
                        <th>Model</th>
                        <th>Query</th>
                        <th>Response</th>
                        <th>Helpful</th>
                        <th>Confidence</th>
                        <th>Response Time</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody id="dataTableBody">
                    <!-- Data will be loaded here -->
                </tbody>
            </table>
        </div>

        <!-- Pagination -->
        <div class="pagination" id="pagination">
            <!-- Pagination will be loaded here -->
        </div>
    </div>

    <a href="/ai-engine-landing.html">Exit</a>

    <script>
        let currentPage = 1;
        const itemsPerPage = 20;

        // Load data on page load
        document.addEventListener('DOMContentLoaded', () => {
            loadData();
            loadEnhancedMetrics();
            setInterval(loadEnhancedMetrics, 30000); // Refresh every 30 seconds
        });

        async function loadData(page = 1) {
            try {
                const params = new URLSearchParams({
                    page: page,
                    per_page: itemsPerPage,
                    module: document.getElementById('moduleFilter').value,
                    model: document.getElementById('modelFilter').value,
                    helpful: document.getElementById('helpfulFilter').value,
                    approved: document.getElementById('approvedFilter').value
                });

                const response = await fetch(`/api/ai/training-data?${params}`);
                const data = await response.json();

                updateTable(data.data);
                updatePagination(data.pagination);
                updateStats(data.stats);
            } catch (error) {
                console.error('Error loading data:', error);
            }
        }

        function updateTable(data) {
            const tbody = document.getElementById('dataTableBody');
            tbody.innerHTML = data.map(item => `
                <tr>
                    <td><input type="checkbox" class="row-select" value="${item.id}"></td>
                    <td><span class="model-badge ${item.module}-badge">${item.module.toUpperCase()}</span></td>
                    <td><span class="model-badge ${item.model_used.includes('sonar') ? 'sonar-badge' : 'self-badge'}">${item.model_used}</span></td>
                    <td><div class="query-text" title="${item.user_query}">${item.user_query}</div></td>
                    <td><div class="response-text" title="${item.ai_response}">${item.ai_response}</div></td>
                    <td class="${item.was_helpful === null ? 'helpful-null' : (item.was_helpful ? 'helpful-yes' : 'helpful-no')}">
                        ${item.was_helpful === null ? 'No feedback' : (item.was_helpful ? '👍 Yes' : '👎 No')}
                    </td>
                    <td>${item.confidence_score ? Math.round(item.confidence_score) + '%' : 'N/A'}</td>
                    <td>${item.response_time_ms ? item.response_time_ms + 'ms' : 'N/A'}</td>
                    <td>${new Date(item.created_at).toLocaleDateString()}</td>
                    <td>${item.training_approved ? '✅ Approved' : '⏳ Pending'}</td>
                </tr>
            `).join('');
        }

        function updatePagination(pagination) {
            const paginationDiv = document.getElementById('pagination');
            paginationDiv.innerHTML = '';

            for (let i = 1; i <= pagination.total_pages; i++) {
                const button = document.createElement('button');
                button.textContent = i;
                button.className = i === pagination.current_page ? 'active' : '';
                button.onclick = () => loadData(i);
                paginationDiv.appendChild(button);
            }
        }

        function updateStats(stats) {
            document.getElementById('total-interactions').textContent = stats.total;
            document.getElementById('helpful-percentage').textContent = stats.helpful_percentage + '%';
            document.getElementById('sonar-usage').textContent = stats.sonar_usage + '%';
            document.getElementById('avg-confidence').textContent = stats.avg_confidence + '%';
        }

        async function loadEnhancedMetrics() {
            try {
                const response = await fetch('/api/ai/dashboard-metrics');
                const data = await response.json();
                
                updateSystemStatus(data.status);
                updateEnhancedMetrics(data.metrics);
                updateErrorDetails(data.errors);
                
            } catch (error) {
                console.error('Error loading enhanced metrics:', error);
                document.getElementById('api-status').textContent = 'Error';
            }
        }

        function updateSystemStatus(status) {
            document.getElementById('ollama-status').textContent = status.ollama ? 'Online' : 'Offline';
            document.getElementById('api-status').textContent = status.api ? 'Online' : 'Offline';
            document.getElementById('model-status').textContent = status.model_performance;
            document.getElementById('db-status').textContent = status.database ? 'Connected' : 'Error';
        }

        function updateEnhancedMetrics(metrics) {
            document.getElementById('success-rate').textContent = metrics.success_rate + '%';
            document.getElementById('avg-response-time').textContent = metrics.avg_response_time + 'ms';
            document.getElementById('timeout-rate').textContent = metrics.timeout_rate + '%';
            document.getElementById('total-errors').textContent = metrics.total_requests - metrics.success_rate;
            document.getElementById('codellama-usage').textContent = metrics.codellama_usage + '%';
            document.getElementById('llama-usage').textContent = metrics.llama_usage + '%';
            
            // Calculate question types (approximate)
            const mathQuestions = Math.round(metrics.codellama_usage * metrics.total_requests / 100);
            const semanticQuestions = Math.round(metrics.llama_usage * metrics.total_requests / 100);
            document.getElementById('math-questions').textContent = mathQuestions;
            document.getElementById('semantic-questions').textContent = semanticQuestions;
        }

        function updateErrorDetails(errors) {
            const container = document.getElementById('error-details-list');
            if (errors && errors.length > 0) {
                container.innerHTML = errors.map(error => `
                    <div class="metric-row">
                        <span class="metric-name">${error.type}</span>
                        <span class="metric-value ${error.class}" style="font-size: 0.75rem; padding: 0.125rem 0.25rem; border-radius: 0.25rem;">${error.count}</span>
                    </div>
                `).join('');
            } else {
                container.innerHTML = '<div style="text-align: center; color: #10b981; font-size: 0.75rem; padding: 0.5rem;">✅ No errors!</div>';
            }
        }

        function refreshMetrics() {
            loadEnhancedMetrics();
            loadData(currentPage);
        }

        function applyFilters() {
            loadData(1);
        }

        function toggleSelectAll() {
            const selectAll = document.getElementById('selectAll');
            const checkboxes = document.querySelectorAll('.row-select');
            checkboxes.forEach(cb => cb.checked = selectAll.checked);
        }

        async function approveSelected() {
            const selected = Array.from(document.querySelectorAll('.row-select:checked')).map(cb => cb.value);
            
            if (selected.length === 0) {
                alert('Please select items to approve');
                return;
            }

            try {
                const response = await fetch('/api/ai/approve-training', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
                    },
                    body: JSON.stringify({ ids: selected })
                });

                if (response.ok) {
                    alert('Selected items approved for training');
                    loadData(currentPage);
                } else {
                    alert('Error approving items');
                }
            } catch (error) {
                console.error('Error approving items:', error);
                alert('Error approving items');
            }
        }

        async function exportTrainingData() {
            const module = document.getElementById('moduleFilter').value;
            const url = module ? `/api/ai/export-training/${module}` : '/api/ai/export-training';
            
            try {
                const response = await fetch(url);
                const blob = await response.blob();
                const downloadUrl = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.style.display = 'none';
                a.href = downloadUrl;
                a.download = module ? `training-data-${module}.jsonl` : 'training-data-all.jsonl';
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(downloadUrl);
            } catch (error) {
                console.error('Error exporting data:', error);
                alert('Error exporting training data');
            }
        }
    </script>
</body>
</html>
<?php /**PATH /Users/lib/Dropbox/wwwdevelop/sites/i3v1-self-saas/resources/views/ai-training-dashboard.blade.php ENDPATH**/ ?>