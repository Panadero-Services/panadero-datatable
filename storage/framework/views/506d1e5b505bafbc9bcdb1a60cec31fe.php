<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="<?php echo e(csrf_token()); ?>">
    <title>AI System Performance Dashboard</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 1rem;
        }
        .container { 
            max-width: 1600px; 
            margin: 0 auto; 
            background: rgba(255,255,255,0.95);
            border-radius: 1rem;
            padding: 2rem;
            backdrop-filter: blur(10px);
        }
        h1 { 
            color: #1e293b; 
            margin-bottom: 2rem; 
            text-align: center;
            font-size: 2.5rem;
        }
        .status-bar {
            display: flex;
            gap: 1rem;
            margin-bottom: 2rem;
            flex-wrap: wrap;
        }
        .status-item {
            background: white;
            padding: 1rem;
            border-radius: 0.5rem;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            flex: 1;
            min-width: 200px;
        }
        .status-indicator {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            display: inline-block;
            margin-right: 0.5rem;
        }
        .status-online { background: #10b981; }
        .status-warning { background: #f59e0b; }
        .status-error { background: #ef4444; }
        .metrics-grid { 
            display: grid; 
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); 
            gap: 1.5rem; 
            margin-bottom: 2rem; 
        }
        .metric-card { 
            background: white;
            padding: 1.5rem; 
            border-radius: 0.75rem; 
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        .metric-title { 
            font-size: 0.875rem; 
            font-weight: 600; 
            color: #6b7280; 
            margin-bottom: 0.5rem;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }
        .metric-value { 
            font-size: 2rem; 
            font-weight: bold; 
            color: #1f2937;
            margin-bottom: 0.25rem;
        }
        .metric-change {
            font-size: 0.75rem;
            font-weight: 500;
        }
        .positive { color: #10b981; }
        .negative { color: #ef4444; }
        .neutral { color: #6b7280; }
        .charts-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1.5rem;
            margin-bottom: 2rem;
        }
        .chart-container {
            background: white;
            padding: 1.5rem;
            border-radius: 0.75rem;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        .chart-title {
            font-size: 1.125rem;
            font-weight: 600;
            color: #1f2937;
            margin-bottom: 1rem;
        }
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
        .error-type {
            font-weight: 600;
            color: #1f2937;
        }
        .error-count {
            background: #fef2f2;
            color: #dc2626;
            padding: 0.25rem 0.5rem;
            border-radius: 0.25rem;
            font-size: 0.875rem;
            font-weight: 600;
        }
        .timeout-count {
            background: #fef3c7;
            color: #d97706;
        }
        .api-error-count {
            background: #fef2f2;
            color: #dc2626;
        }
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
        .loading {
            text-align: center;
            padding: 2rem;
            color: #6b7280;
        }
        @media (max-width: 768px) {
            .charts-grid { grid-template-columns: 1fr; }
            .status-bar { flex-direction: column; }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🤖 AI System Performance Dashboard</h1>
        
        <button class="refresh-btn" onclick="refreshDashboard()">🔄 Refresh Data</button>
        
        <!-- System Status -->
        <div class="status-bar">
            <div class="status-item">
                <div class="status-indicator status-online"></div>
                <strong>Ollama Service</strong>
                <div id="ollama-status">Checking...</div>
            </div>
            <div class="status-item">
                <div class="status-indicator status-online"></div>
                <strong>Laravel API</strong>
                <div id="api-status">Checking...</div>
            </div>
            <div class="status-item">
                <div class="status-indicator status-warning"></div>
                <strong>Model Performance</strong>
                <div id="model-status">Loading...</div>
            </div>
            <div class="status-item">
                <div class="status-indicator status-online"></div>
                <strong>Database</strong>
                <div id="db-status">Connected</div>
            </div>
        </div>

        <!-- Key Metrics -->
        <div class="metrics-grid">
            <div class="metric-card">
                <div class="metric-title">Total Requests (24h)</div>
                <div class="metric-value" id="total-requests">-</div>
                <div class="metric-change neutral" id="requests-change">Loading...</div>
            </div>
            <div class="metric-card">
                <div class="metric-title">Success Rate</div>
                <div class="metric-value" id="success-rate">-</div>
                <div class="metric-change neutral" id="success-change">Loading...</div>
            </div>
            <div class="metric-card">
                <div class="metric-title">Avg Response Time</div>
                <div class="metric-value" id="avg-response-time">-</div>
                <div class="metric-change neutral" id="response-change">Loading...</div>
            </div>
            <div class="metric-card">
                <div class="metric-title">Timeout Rate</div>
                <div class="metric-value" id="timeout-rate">-</div>
                <div class="metric-change neutral" id="timeout-change">Loading...</div>
            </div>
            <div class="metric-card">
                <div class="metric-title">CodeLlama Usage</div>
                <div class="metric-value" id="codellama-usage">-</div>
                <div class="metric-change neutral" id="codellama-change">Loading...</div>
            </div>
            <div class="metric-card">
                <div class="metric-title">Llama3.2 Usage</div>
                <div class="metric-value" id="llama-usage">-</div>
                <div class="metric-change neutral" id="llama-change">Loading...</div>
            </div>
        </div>

        <!-- Charts -->
        <div class="charts-grid">
            <div class="chart-container">
                <div class="chart-title">Response Time Trend (Last 24h)</div>
                <canvas id="responseTimeChart"></canvas>
            </div>
            <div class="chart-container">
                <div class="chart-title">Error Types Distribution</div>
                <canvas id="errorTypesChart"></canvas>
            </div>
        </div>

        <!-- Error Details -->
        <div class="error-details">
            <div class="chart-title">Error Analysis</div>
            <div id="error-details-list">
                <div class="loading">Loading error details...</div>
            </div>
        </div>
    </div>

    <script>
        let responseTimeChart, errorTypesChart;

        // Initialize dashboard
        document.addEventListener('DOMContentLoaded', () => {
            initializeCharts();
            refreshDashboard();
            setInterval(refreshDashboard, 30000); // Refresh every 30 seconds
        });

        function initializeCharts() {
            // Response Time Chart
            const responseCtx = document.getElementById('responseTimeChart').getContext('2d');
            responseTimeChart = new Chart(responseCtx, {
                type: 'line',
                data: {
                    labels: [],
                    datasets: [{
                        label: 'Avg Response Time (ms)',
                        data: [],
                        borderColor: '#667eea',
                        backgroundColor: 'rgba(102, 126, 234, 0.1)',
                        tension: 0.4
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: { beginAtZero: true }
                    }
                }
            });

            // Error Types Chart
            const errorCtx = document.getElementById('errorTypesChart').getContext('2d');
            errorTypesChart = new Chart(errorCtx, {
                type: 'doughnut',
                data: {
                    labels: [],
                    datasets: [{
                        data: [],
                        backgroundColor: [
                            '#ef4444', '#f59e0b', '#10b981', '#3b82f6', '#8b5cf6'
                        ]
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: { position: 'bottom' }
                    }
                }
            });
        }

        async function refreshDashboard() {
            try {
                const response = await fetch('/api/ai/dashboard-metrics');
                const data = await response.json();
                
                updateSystemStatus(data.status);
                updateMetrics(data.metrics);
                updateCharts(data.charts);
                updateErrorDetails(data.errors);
                
            } catch (error) {
                console.error('Error refreshing dashboard:', error);
                document.getElementById('api-status').textContent = 'Error';
                document.querySelector('.status-indicator').className = 'status-indicator status-error';
            }
        }

        function updateSystemStatus(status) {
            document.getElementById('ollama-status').textContent = status.ollama ? 'Online' : 'Offline';
            document.getElementById('api-status').textContent = status.api ? 'Online' : 'Offline';
            document.getElementById('model-status').textContent = status.model_performance;
            document.getElementById('db-status').textContent = status.database ? 'Connected' : 'Error';
        }

        function updateMetrics(metrics) {
            document.getElementById('total-requests').textContent = metrics.total_requests.toLocaleString();
            document.getElementById('success-rate').textContent = metrics.success_rate + '%';
            document.getElementById('avg-response-time').textContent = metrics.avg_response_time + 'ms';
            document.getElementById('timeout-rate').textContent = metrics.timeout_rate + '%';
            document.getElementById('codellama-usage').textContent = metrics.codellama_usage + '%';
            document.getElementById('llama-usage').textContent = metrics.llama_usage + '%';

            // Update change indicators
            updateChangeIndicator('requests-change', metrics.requests_change);
            updateChangeIndicator('success-change', metrics.success_change);
            updateChangeIndicator('response-change', metrics.response_change);
            updateChangeIndicator('timeout-change', metrics.timeout_change);
        }

        function updateChangeIndicator(elementId, change) {
            const element = document.getElementById(elementId);
            element.textContent = change > 0 ? `+${change}%` : `${change}%`;
            element.className = `metric-change ${change > 0 ? 'positive' : change < 0 ? 'negative' : 'neutral'}`;
        }

        function updateCharts(charts) {
            // Update response time chart
            responseTimeChart.data.labels = charts.response_time.labels;
            responseTimeChart.data.datasets[0].data = charts.response_time.data;
            responseTimeChart.update();

            // Update error types chart
            errorTypesChart.data.labels = charts.error_types.labels;
            errorTypesChart.data.datasets[0].data = charts.error_types.data;
            errorTypesChart.update();
        }

        function updateErrorDetails(errors) {
            const container = document.getElementById('error-details-list');
            container.innerHTML = errors.map(error => `
                <div class="error-item">
                    <div>
                        <div class="error-type">${error.type}</div>
                        <div style="font-size: 0.875rem; color: #6b7280;">${error.description}</div>
                    </div>
                    <div class="error-count ${error.class}">${error.count}</div>
                </div>
            `).join('');
        }
    </script>
</body>
</html>

<?php /**PATH /Users/lib/Dropbox/wwwdevelop/sites/i3v1-self-saas/resources/views/ai-optimized-dashboard.blade.php ENDPATH**/ ?>