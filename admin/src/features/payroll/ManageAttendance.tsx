import { PageHeader } from "@/components/common/PageHeader";
import { Box } from "@mui/material";

export const ManageAttendance = () => {

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        maxHeight: '100%',
        overflow: 'hidden',
      }}
    >
      <PageHeader
        title="Manage Attendance"
        icon="HowToReg"
        sx={{ mb: 0.5, padding: 1.5 }}
      />

      {/* <PageContent>
        
      </PageContent> */}
    </Box>
  );
}