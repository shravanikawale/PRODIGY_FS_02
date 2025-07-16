<Routes>
  <Route path="/login" element={<Login />} />
  <Route path="/dashboard" element={
    <PrivateRoute><Dashboard /></PrivateRoute>
  } />
</Routes>
