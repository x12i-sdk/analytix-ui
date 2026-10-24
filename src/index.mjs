import assert from 'node:assert/strict';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { writeFile } from 'node:fs/promises';
async function savePreview(markup) {
  assert(markup.length > 0);
  await writeFile('preview.html', '<!doctype html><html lang="en"><meta charset="utf-8"><title>Package UI fixture</title><body>' + markup + '</body></html>');
  console.log('Generated preview.html (' + markup.length + ' characters).');
}
import { MetricWidget, TableWidget } from '@x12i/analytix-ui';
const timestamp = '2026-01-01T00:00:00.000Z';
const common = { _catalogId: 'fixture', id: 'fixture', version: 1, status: 'active', title: 'Example',
  createdAt: timestamp, updatedAt: timestamp, createdBy: 'example', updatedBy: 'example', metadata: {},
};
function analyticResult(id, data) { return { analyticId: id, analyticType: 'query', version: 1, status: 'active', data,
  meta: { cache: { hit: false, key: 'fixture' }, probes: [], execution: { durationMs: 0, startedAt: timestamp, finishedAt: timestamp, traceId: 'fixture-trace' } },
}; }
const markup = renderToStaticMarkup(React.createElement('main', null,
  React.createElement(MetricWidget, { title: 'Example total', result: analyticResult('fixture-total', 3) }),
  React.createElement(TableWidget, { title: 'Example rows', result: analyticResult('fixture-table', [{ name: 'Example record', count: 3 }]) }),
));
assert(markup.includes('Example total'));
assert(markup.includes('Example record'));
assert(markup.includes('<table'));
await savePreview(markup);
