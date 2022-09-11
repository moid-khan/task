import {
  Avatar,
  Box,
  Button,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
// Icons
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import CollectionsOutlinedIcon from "@mui/icons-material/CollectionsOutlined";

const Post = (props) => {
  const { user, text, imageUrl } = props.post;
  return (
    <Box bgcolor={"#fff"} p={2} borderRadius=".4em" m={2}>
      {/* Post Header */}
      <Stack
        direction="row"
        spacing={2}
        alignItems={"center"}
        justifyContent="space-between"
      >
        <Box display={"flex"} alignItems="center" gap="1em">
          <Avatar
            sx={{ width: 56, height: 56 }}
            alt="profile picture"
            src={user.imageUrl}
          />
          <Stack spacing={0.5}>
            <Typography variant="p" fontWeight={600}>
              {user.name.first + " " + user.name.last}
            </Typography>
            <Typography variant="p" color={"#9AB1BD"} fontSize=".8em">
              {user.position}
            </Typography>
          </Stack>
        </Box>
        <Box>
          <IconButton>
            <MoreVertIcon sx={{ color: "#0073B1" }} />
          </IconButton>
        </Box>
      </Stack>
      {/* Post Description */}
      <Box sx={{ p: "15px 0" }}>
        <Typography variant="p" color={"#9AB1BD"} fontWeight={300}>
          {text}
        </Typography>
      </Box>
      {/* Post Image */}
      <Box>
        <img
          src={imageUrl}
          style={{
            width: "100%",
            boxShadow: "0px 8px 30px 0px rgba(0,0,0,0.10)",
          }}
          alt="Post"
        />
      </Box>
      {/* Post Actions */}
      <Stack direction="row" spacing={2} sx={{ margin: ".8em 0" }}>
        <Button
          startIcon={<ThumbUpOffAltIcon />}
          sx={{ textTransform: "none", color: "#0073B1", fontWeight: 400 }}
        >
          Like
        </Button>
        <Button
          startIcon={<SmsOutlinedIcon />}
          sx={{ textTransform: "none", color: "#0073B1", fontWeight: 400 }}
        >
          Comment
        </Button>
        <Button
          startIcon={<ShareOutlinedIcon />}
          sx={{ textTransform: "none", color: "#0073B1", fontWeight: 400 }}
        >
          Share
        </Button>
        <Button
          startIcon={<SendOutlinedIcon />}
          sx={{ textTransform: "none", color: "#0073B1", fontWeight: 400 }}
        >
          Send
        </Button>
      </Stack>
      {/* Post Comment */}
      <Box display="flex" alignItems="center" gap="1em">
        <Avatar
          sx={{ width: 30, height: 30 }}
          alt="profile picture"
          src={user.imageUrl}
        />
        <Box
          display="flex"
          alignItems="center"
          flex={1}
          sx={{
            border: "1px solid #CEE1F2",
            borderRadius: ".2em",
            padding: "1em .4em",
          }}
        >
          <input type="text" placeholder="Add a comment" className="comment" />
          <IconButton>
            <CollectionsOutlinedIcon sx={{ color: "#0073B1" }} />
          </IconButton>
          <IconButton>
            <SendOutlinedIcon sx={{ color: "#0073B1" }} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Post;
